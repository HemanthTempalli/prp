export interface Recipe {
  author: any;
  id: string;
  title: string;
  description: string;
  cookingTime: number;
  servings: number;
  difficulty: string;
  imageUrl: string;
  isSpecial: boolean; // Add this line
}
