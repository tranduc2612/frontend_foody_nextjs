interface Recipes{
  id: string
  title: string
  description: string
  rate: number
  calories: number
  sodium: number
  fat: number;
  carbs: number;
  fiber: number;
  timeCook: number;
  createdAt: Date;
  createdBy: string;
  isDelete: boolean;
  idSteps: Step[]
  commentIds: CommentRecipes[]
  idSeason: Season
  idRecipesType: RecipesType
  idCountry: Country;
  idDetailRecipes: DetailRecipes[];
}

interface Step {
    id: string
    title: string
    description: number
    stepCount: number
    idRecipe: Recipes
}

interface CommentRecipes {
    id: string
    content: string
    createdAt: Date
    idUser: Users
    idRecipe: Recipes
}

interface Season {
    id: string
    content: string
    createdAt: Date
    createdBy: string
    idRescipes: Recipes[]
}

interface RecipesType {
    id: string
    content: string
    createdAt: Date
    createdBy: string
    idRescipes: Recipes[]
}

interface Country {
    id: string
    content: string
    createdAt: Date
    createdBy: string
    idRescipes: Recipes[]
}

interface DetailRecipes {
    id: string
    numberCount: number
    idRescipes: Recipes
    idMerchandise: Merchandise;
}

interface GetRecipesPayload {
    pageCount: number;
    pageIndex: number;
    title?: string;
};