import React from 'react';

interface ProductCardSkeletonProps {
  id?: string;
}

export const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-sm flex flex-col justify-between animate-pulse select-none"
      aria-hidden="true"
    >
      <div>
        {/* Top Header Row: Category pill & badges */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="h-5 w-20 bg-stone-200/90 rounded-full" />
          <div className="flex items-center gap-2">
            <div className="h-4 w-14 bg-stone-100 rounded" />
            <div className="h-4 w-10 bg-stone-200/80 rounded" />
          </div>
        </div>

        {/* Product Title (Bengali/Main name) */}
        <div className="h-6 w-3/4 bg-stone-200 rounded-md mb-1.5" />

        {/* Product Subtitle (English name) */}
        <div className="h-3.5 w-2/5 bg-stone-100 rounded mb-3" />

        {/* Product Description: 2 lines */}
        <div className="space-y-1.5 mb-3.5">
          <div className="h-3 w-full bg-stone-100 rounded" />
          <div className="h-3 w-4/5 bg-stone-100 rounded" />
        </div>

        {/* Grain Type & Origin Chips */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          <div className="h-5 w-28 bg-stone-100 rounded" />
          <div className="h-5 w-24 bg-stone-100 rounded" />
        </div>

        {/* Bag Size / Weight Selection Row */}
        <div className="mb-4">
          <div className="h-3 w-36 bg-stone-200/70 rounded mb-2" />
          <div className="flex flex-wrap gap-1.5">
            <div className="h-7 w-20 bg-stone-100 rounded-lg" />
            <div className="h-7 w-24 bg-stone-100 rounded-lg" />
            <div className="h-7 w-20 bg-stone-100 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Pricing & Add to Cart Footer */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
        <div>
          <div className="h-3 w-16 bg-stone-100 rounded mb-1" />
          <div className="flex items-baseline gap-1.5">
            <div className="h-6 w-20 bg-stone-200/90 rounded" />
            <div className="h-4 w-16 bg-stone-100 rounded" />
          </div>
        </div>

        <div className="h-9 w-28 bg-stone-200/90 rounded-xl" />
      </div>
    </div>
  );
};

interface ProductSkeletonGridProps {
  count?: number;
}

export const ProductSkeletonGrid: React.FC<ProductSkeletonGridProps> = ({ count = 4 }) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      role="status"
      aria-label="Loading products"
    >
      {skeletons.map((idx) => (
        <ProductCardSkeleton key={idx} id={`product-skeleton-${idx}`} />
      ))}
      <span className="sr-only">Loading products list...</span>
    </div>
  );
};
