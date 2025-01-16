const loadingText: string[] = [
    "skibidi toilet lore is really deep - mariah",
    "did you know that there are over 73000 species of trees on Earth?",
    "you can use crushed crayfish shells to fertilize plants",
    "don't waste your coffee grounds, feed it to your tree",
    "the scientific name for the tea plant is Camellia sinensis",
    "you should try genmaicha if you haven't already",
    "don't water your cacti too much! you might drown them",
    "the developer went out of his way to touch grass for a week during the development of this tool",
    "boreal forests are awesome",
    "pine trees are called coniferous because they make cones",
    "the average tree can be used to make 10000 sheets of paper",
    "recycling paper is really important actually",
    "database by man with a mission carried me through the development of this app",
    "make sure you take care of the plants you have in your house!",
    "splitting axes don't actually need to be that sharp to split wood",
    "git trees aren't actually trees",
    "does anyone actually read these?",
    "from the ground you came, and to the ground you will return",
    "the fog is coming",
    "in case you can't tell, i like plants",
    "photosynthesis is really interesting and you should read about it more",
    "40% of canada is just forest",
]

export default function randomLoadingText() {
    const result = loadingText[Math.round(Math.random() * loadingText.length)];
    console.log(result);
    return result;
}