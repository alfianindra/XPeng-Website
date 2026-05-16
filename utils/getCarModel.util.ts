import {
  CarModel, 
} from '@/lib/model';

export function getModel(slug: string, models: CarModel[]): CarModel | undefined {
  return models.find((model) => model.slug === slug)
}

export function getAllSlugs(models: CarModel[]): string[] {
  return models.map((model) => model.slug)
}