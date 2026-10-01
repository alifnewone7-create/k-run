export const REVIEWS = Array.from({ length: 40 }, (_, i) => `/reviews/review-${String(i + 1).padStart(2, "0")}.jpg`);

export const RING = [0, 5, 10, 16, 22, 28, 34].map((i) => ({ idx: i, src: REVIEWS[i] }));
