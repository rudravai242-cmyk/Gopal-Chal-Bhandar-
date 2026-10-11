import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Helper for formatting personalized Bengali greeting fallback
function generatePoliteBengaliSlip(data: any): string {
  const rawName = (data.customerName || '').trim();
  let salutation = 'নমস্কার মহাশয়';
  if (rawName && rawName !== 'সাধারণ ক্রেতা') {
    if (rawName.includes('বাবু') || rawName.includes('দা') || rawName.includes('মহাশয়')) {
      salutation = `নমস্কার ${rawName}`;
    } else {
      salutation = `নমস্কার ${rawName} বাবু`;
    }
  }

  const itemsText = (data.items || [])
    .map(
      (it: any, idx: number) =>
        `${idx + 1}. *${it.product?.nameBn || it.name}*\n   📦 সাইজ: ${it.selectedBag?.label || it.bag} × ${it.quantity} টি — ₹${(it.selectedBag?.retailPrice || it.price) * it.quantity}`
    )
    .join('\n');

  return `🌾 *॥ শ্রী শ্রী গোপাল জিউ ভরসা ॥*
*গোপাল চাল ভাণ্ডার — কালনা আরএমসি মার্কেট*
────────────────────────────
${salutation},
আমাদের দোকানে চালের খোঁজ নেওয়ার জন্য আপনাকে আন্তরিক ধন্যবাদ ও সশ্রদ্ধ অভিনন্দন।

আপনার অনুরোধ অনুযায়ী আজকের ভার্চুয়াল চালের ফর্দটি নিচে সুন্দরভাবে সাজিয়ে দেওয়া হলো:

🔖 *ডিজিটাল ফর্দ কোড:* ${data.fardId || 'GCB-ONLINE'}
👤 *ক্রেতার নাম:* ${rawName || 'শ্রদ্ধেয় ক্রেতা'}
📱 *মোবাইল নম্বর:* ${data.customerPhone || 'দোকানে আগত'}
${data.expectedVisitTime ? `⏰ *দোকানে আসার সময়:* ${data.expectedVisitTime}\n` : ''}
📦 *নির্বাচিত চালের তালিকা:*
${itemsText}

────────────────────────────
⚖️ *মোট চালের ওজন:* ~${data.totalWeightKg || 0} কেজি (${data.totalBags || 0} টি বস্তা/প্যাকেট)
💰 *আনুমানিক প্রদেয় মূল্য:* ₹${data.totalPrice || 0}
${data.notes ? `📝 *বিশেষ দ্রষ্টব্য:* ${data.notes}\n` : ''}────────────────────────────
📍 *দোকানের ঠিকানা:*
গোপাল চাল ভাণ্ডার
কালনা আরএমসি মার্কেট, ভোলেবাবা রেস্টুরেন্ট ও কুণ্ডু দোকানের কাছে, কালনা, পূর্ব বর্ধমান
📞 সরাসরি ফোন: +91 81456 25847

⚠️ *বিশেষ জ্ঞাতব্য:*
আমরা কোনো অনলাইন হোম ডেলিভারি করি না। চাল সংগ্রহ করতে কালনার আরএমসি মার্কেট দোকানে সরাসরি আসতে হবে। এই ডিজিটাল ফর্দ কোডটি দেখালে দ্রুত বস্তা প্রস্তুত করে আপনার গাড়িতে তুলে দেওয়া হবে।

আপনার দিনটি শুভ ও আনন্দময় হোক! 🙏`;
}

// API Route: Generate AI-powered WhatsApp Bengali Slip
app.post('/api/generate-whatsapp-message', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.log('GEMINI_API_KEY not configured, using crafted Bengali template');
      return res.json({ message: generatePoliteBengaliSlip(data), source: 'template' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const rawName = (data.customerName || '').trim();

    const prompt = `Act as an expert copywriter for "গোপাল চাল ভাণ্ডার" (Gopal Chal Bhandar), a prestigious wholesale and retail rice merchant in Kalna RMC Market, Purba Bardhaman, West Bengal.
Write a respectful, beautifully formatted WhatsApp message (চালের ফর্দ / ডিজিটাল স্লিপ).

CRITICAL GREETING INSTRUCTION:
Greet the customer respectfully by name in polite style (such as "নমস্কার রাম বাবু," or "নমস্কার শ্রদ্ধেয় রাম বাবু,").
If name is "${rawName}", greet respectfully as "নমস্কার ${rawName.includes('বাবু') ? rawName : rawName + ' বাবু'}," (or if no name is provided, "নমস্কার শ্রদ্ধেয় ক্রেতা মহাশয়,").

Fard Details:
- Fard Token No: ${data.fardId || 'GCB-ONLINE'}
- Customer Name: ${rawName || 'শ্রদ্ধেয় ক্রেতা'}
- Customer Phone: ${data.customerPhone || ''}
- Expected Visit Time: ${data.expectedVisitTime || 'আজকেই'}
- Items:
${(data.items || [])
  .map(
    (it: any, i: number) =>
      `  ${i + 1}. ${it.product?.nameBn || it.name} (${it.selectedBag?.label || it.bag}) x ${it.quantity} = ₹${(it.selectedBag?.retailPrice || it.price) * it.quantity}`
  )
  .join('\n')}
- Total Weight: ~${data.totalWeightKg} kg (${data.totalBags} bags/packets)
- Total Estimated Cost: ₹${data.totalPrice}
- Notes: ${data.notes || 'কোনো বিশেষ নোট নেই'}
- Store: গোপাল চাল ভাণ্ডার, কালনা আরএমসি মার্কেট, ভোলেবাবা রেস্টুরেন্ট ও কুণ্ডু দোকানের কাছে (Kalna RMC Market near Bholebaba Restaurant Near Kundu shop), কালনা, পূর্ব বর্ধমান (ফোন: +91 81456 25847)
- Policy: "আমরা কোনো প্রকার অনলাইন ডেলিভারি করি না, চাল সংগ্রহ করতে কালনার আরএমসি মার্কেট দোকানে সরাসরি আসতে হবে।"

Formatting requirements:
1. Start with "🌾 *॥ শ্রী শ্রী গোপাল জিউ ভরসা ॥*" and store title.
2. Next, put the polite, warm greeting (e.g. "নমস্কার ${rawName ? (rawName.includes('বাবু') ? rawName : rawName + ' বাবু') : 'শ্রদ্ধেয় মহাশয়'}, ...").
3. Use WhatsApp markdown (*bold* for headings and totals).
4. Clearly lay out the items, weight, sack counts, and estimated bill.
5. Emphasize politely that purchase is directly at the Kalna physical store, no online delivery.
6. End with warm courteous regards from গোপাল চাল ভাণ্ডার family.
7. Return ONLY the formatted WhatsApp message text. No English explanation, no backticks markdown wrapping.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const generatedText = response.text?.trim();

    if (generatedText && generatedText.length > 50) {
      return res.json({ message: generatedText, source: 'gemini-ai' });
    } else {
      return res.json({ message: generatePoliteBengaliSlip(data), source: 'fallback' });
    }
  } catch (error) {
    console.error('Error generating AI WhatsApp message:', error);
    return res.json({ message: generatePoliteBengaliSlip(req.body), source: 'error-fallback' });
  }
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', store: 'গোপাল চাল ভাণ্ডার' });
});

// Setup Vite middleware in dev or static serve in production
async function start() {
  app.use(express.static(path.join(process.cwd(), 'public')));

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);

    // Fallback to ensure all non-API paths render the single-page application seamlessly
    app.use('*', async (req: Request, res: Response, next) => {
      const url = req.originalUrl;
      try {
        const indexPath = path.resolve(process.cwd(), 'index.html');
        if (fs.existsSync(indexPath)) {
          let template = fs.readFileSync(indexPath, 'utf-8');
          template = await vite.transformIndexHtml(url, template);
          res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
        } else {
          next();
        }
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      const indexDist = path.join(distPath, 'index.html');
      if (fs.existsSync(indexDist)) {
        res.sendFile(indexDist);
      } else {
        res.sendFile(path.join(process.cwd(), 'index.html'));
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`গোপাল চাল ভাণ্ডার server running on http://0.0.0.0:${PORT}`);
  });
}

start();
