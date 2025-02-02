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
    "green is a cool color",
    "plants can recognize their siblings and grow more nicely around them.",
    "some plants, like the venus flytrap, eat bugs for nutrients.",
    "bamboo is technically a giant grass, not a tree.",
    "there are over 390,000 plant species known to science.",
    "plants ‘breathe’ through tiny holes called stomata.",
    "a single tree can absorb up to 48 pounds of carbon dioxide a year.",
    "bananas are technically berries, but strawberries aren’t!",
    "some plants can move, like the mimosa plant that folds its leaves when touched.",
    "sunflowers can clean up radioactive soil – they’re nature’s little helpers.",
    "the welwitschia plant can live up to 2,000 years in the desert.",
    "mosses are one of the oldest plant groups on earth, over 450 million years old.",
    "some orchids can mimic the smell of rotting meat to attract flies.",
    "the giant sequoia is one of the largest trees and can weigh more than a blue whale.",
    "a cactus can survive for years without water due to its thick, water-storing stem.",
    "peanuts aren’t nuts; they’re legumes that grow underground.",
    "plants like lavender and basil can repel mosquitoes naturally.",
    "there’s a type of fungus that invades plants and looks like zombie spores.",
    "the corpse flower smells like rotting meat to attract pollinators.",
    "plants release most of their oxygen during the daytime.",
    "some trees can ‘talk’ to each other through underground fungi networks.",
    "the rafflesia flower is the world’s largest, and it doesn’t even have leaves or roots.",
    "there’s a tree called the dragon blood tree that oozes red sap.",
    "the leaves of the amazonian water lily can hold a small child.",
    "there are ‘air plants’ that don’t need soil to grow – just air and moisture.",
    "grass releases a chemical distress signal when you mow it.",
    "there are over 2,000 types of cacti in the world.",
    "plants can sense gravity and grow their roots downward.",
    "the titan arum can grow up to 10 feet tall in just a few weeks.",
    "trees can live for thousands of years – the oldest is over 4,800 years old.",
    "mangroves can grow in salty water and are crucial for coastal ecosystems.",
    "some plants, like the resurrection plant, can come back to life after drying out.",
    "vanilla comes from orchids – and it’s super labor-intensive to harvest.",
    "the baobab tree is called the ‘tree of life’ because of its water-storing trunk.",
    "you can grow new potatoes from old potato pieces.",
    "plants can produce chemicals to ward off pests and diseases.",
    "sunflowers actually follow the sun across the sky – it’s called heliotropism.",
    "some plants form partnerships with ants for protection against predators.",
    "the eucalyptus tree is koalas’ favorite snack.",
    "the roots of some plants can grow over 200 feet deep underground.",
    "plants like aloe vera can soothe burns and skin irritation.",
    "the venus flytrap can snap shut in less than a second.",
    "a tree’s rings tell its age and also reveal past weather conditions.",
    "coffee beans come from a plant’s cherry-like fruit.",
    "the world's smallest flowering plant is a type of duckweed.",
    "seaweed isn’t a plant; it’s a type of algae.",
    "some plants, like pitcher plants, act as natural bug traps.",
    "the wisteria vine can grow up to 10 feet in a single year.",
    "bamboo can grow up to 3 feet in one day – the fastest-growing plant on earth.",
    "plants like marigolds can improve soil health for other crops.",
    "roses have been around for about 35 million years.",
    "plants can ‘hear’ vibrations, like the sound of a buzzing bee.",
    "the amazon rainforest is often called the ‘lungs of the earth.’",
    "carnivorous plants evolved to eat bugs because they live in nutrient-poor soil.",
    "the sap of the rubber tree is used to make natural rubber.",
    "orchids grow on every continent except antarctica.",
    "the tallest tree in the world is a redwood named hyperion, over 380 feet tall.",
    "plants like chamomile and peppermint can be brewed into soothing teas.",
    "lilies are highly toxic to cats, even in small amounts.",
    "some trees can survive being hollowed out and continue to grow.",
    "the dragon tree can live for hundreds of years and looks like it’s from a fantasy world.",
    "the yew tree’s bark is used to make cancer-fighting drugs.",
    "tomatoes were once called ‘poison apples’ because people thought they were toxic.",
    "some orchids have flowers that look like monkeys or other animals.",
    "plants like spinach can ‘bolt’ when they get too hot, growing flowers instead of leaves.",
    "the leaves of the sensitive plant close up when touched to avoid harm.",
    "ginkgo trees are living fossils and date back to the time of dinosaurs.",
    "pumpkins, cucumbers, and zucchinis are technically fruits, not veggies.",
    "plants produce their own food using sunlight, water, and carbon dioxide.",
    "some desert plants can go years without rain by storing water in their tissues.",
    "a single dandelion seed can travel for miles on the wind.",
    "carnivorous plants like sundews use sticky traps to catch insects.",
    "plants like ivy can grow up walls and buildings with tiny rootlets.",
    "trees can reduce temperatures in cities by providing shade and cooling the air.",
    "some flowers, like evening primrose, bloom only at night.",
    "the rubber fig plant is often grown indoors as a popular houseplant.",
    "some seeds, like coconuts, can float across oceans and still grow.",
    "a plant called the ‘living stone’ looks exactly like a rock to avoid being eaten.",
    "plants like wheat and rice are staple foods for billions of people.",
    "trees like birches shed their bark to get rid of pests and diseases.",
    "the ‘peanut butter tree’ actually smells like peanut butter.",
    "plants can communicate with each other using chemical signals.",
    "the sap of the maple tree is used to make delicious maple syrup.",
    "the sap of some plants is toxic and can even burn skin in sunlight.",
    "cacti have spines instead of leaves to conserve water.",
    "the corpse flower takes years to bloom, and it only lasts for a day or two.",
    "some plants, like garlic mustard, release chemicals to harm competing plants.",
    "the leaves of the ginkgo tree turn bright yellow in the fall.",
    "plants can adapt to extreme environments, like deserts and frozen tundras.",
    "succulents store water in their leaves to survive dry conditions.",
    "some flowers, like roses, can change color as they age.",
    "plants like strawberries can clone themselves by growing runners.",
    "trees with hollow trunks can become homes for animals like owls and bats.",
    "the sap of the frankincense tree is used to make incense and perfumes.",
    "sunflowers are actually made up of thousands of tiny individual flowers.",
    "the durian fruit is known for its strong smell but is loved by many animals.",
    "plants like bamboo can prevent soil erosion by holding the soil together.",
    "splitting logs along the grain is way easier than cutting across it.",
    "seasoned firewood burns better because it has less moisture.",
    "a dull axe makes splitting wood harder and more dangerous.",
    "hardwoods like oak and hickory burn longer and hotter than softwoods.",
    "softwoods like pine ignite easily and are great for starting fires.",
    "a maul is heavier than an axe and splits logs more efficiently.",
    "stacking firewood in a crisscross pattern helps it dry faster.",
    "a chopping block reduces strain and makes splitting logs easier.",
    "wood burns best when its moisture content is below 20%.",
    "splitting wood in winter is easier because frozen wood cracks better.",
    "the ‘Swedish torch’ is a log-splitting technique that creates a self-contained campfire.",
    "birch bark is nature’s perfect fire starter, even when wet.",
    "a campfire needs three ingredients: fuel, heat, and oxygen.",
    "splitting wood is a great workout for your arms and core.",
    "the ‘teepee’ fire structure is excellent for quick ignition and cooking.",
    "ash trees are known as ‘ready-to-burn’ wood because they dry so quickly.",
    "the crackling sound in campfires comes from water vapor escaping the wood.",
    "firewood stacked off the ground lasts longer and stays drier.",
    "campfires can reach temperatures of over 1,500 degrees fahrenheit.",
    "cedar wood smells amazing when burned and is perfect for campfires.",
    "splitting logs into smaller pieces makes them dry faster and burn easier.",
    "a properly built campfire leaves little to no smoke.",
    "the ‘log cabin’ fire structure is ideal for a long-lasting flame.",
    "an axe with a fiberglass handle is more durable than a wooden one.",
    "fire pits with airflow designs can burn wood more efficiently.",
    "knotty logs are much harder to split because the grain is twisted.",
    "collecting firewood far from your campsite helps protect local ecosystems.",
    "dry pinecones make excellent natural fire starters.",
    "the ash left behind from campfires can be used as fertilizer.",
    "old-fashioned wedge-and-sledgehammer splitting is still super effective."
]

export default function randomLoadingText() {
    return loadingText[Math.round(Math.random() * loadingText.length)];
}