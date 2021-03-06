import { prisma } from '@/lib/prisma';

export const getBlogViews = async (id: string) => {
  const newOrUpdatedViews = await prisma.views.findUnique({
    where: {
      id,
    },
  });

  return String(newOrUpdatedViews?.count || 0);
};
