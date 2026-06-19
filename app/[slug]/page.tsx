import { notFound } from "next/navigation";
import { LANDERS } from "../config/landers";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DynamicLanderPage({ params }: Props) {
  const { slug } = await params;
  const Component = LANDERS[slug];

  if (!Component) {
    notFound();
  }

  const isLetteredLander = /-[a-e](?:-kq)?$/.test(slug);

  return (
    <div className={`lander-page${isLetteredLander ? " lettered-lander" : ""}`}>
      <Component />
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(LANDERS).map((slug) => ({ slug }));
}
