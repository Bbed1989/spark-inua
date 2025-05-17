export type Text = {
  id: number;
  title: string;
  author: string;
  description?: string;
  slug: string;
  content: string;
};

export const texts: Text[] = [
  {
    id: 1,
    title: "Contra spem spero!",
    author: "Леся Українка",
    description: "Поетичний маніфест боротьби та віри всупереч усьому.",
    slug: "contra-spem-spero",
    content: String.raw`
# Contra spem spero!

Я на гору круту крем'яную  
Буду камінь важкий підіймать,  
І, несучи вагу ту страшную,  
Буду пісню веселу співать...
    `.trim(),
  },
  // інші твори
];