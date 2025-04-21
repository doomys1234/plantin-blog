export type BlogCardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    date?: string;
    readTime?: string;
    isNew?: boolean;
};

export type BlogControlProps = {
    title: string;
    cards: BlogCardProps[];
    layout: "single" | "double" | "grid";
};

export type BlogSection = {
    title: string;
    cards: BlogCardProps[];
};

export type BlogData={
    new: BlogSection;
    topOfTheDay: BlogSection;
    interesting: BlogSection;
}

export type BlogDataResponse = {
   success: boolean;
   data:BlogData;
};
