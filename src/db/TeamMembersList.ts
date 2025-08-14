type TMember = {
    id: number
    image: string
    chefName: string
    chefPos: string
    description: string
}

const TeamMembersList: TMember[] = [
    {
        id: 1,
        image: '/images/team/1.png',
        chefName: "Chef Marie Dupont",
        chefPos: "Head Chef",
        description: "With over 10 years of experience in international kitchens, Chef Marie Dupont leads our team with exceptional creativity and skill. Specialization: Asian and European fusion cuisine."
    },

    {
        id: 2,
        image: '/images/team/2.png',
        chefName: "Chef Luc Moreau",
        chefPos: "Pastry Chef",
        description: "With a culinary background from France, Chef Luc Moreau creates beautiful and innovative pastries. Specialization: classic and modern pastries."
    },

    {
        id: 3,
        image: '/images/team/3.png',
        chefName: "Chef André Dubois",
        chefPos: "Sous Chef",
        description: "Chef André Dubois brings experience from various Michelin-starred restaurants. Specialization: traditional and contemporary Irish cooking techniques."
    },

    {
        id: 4,
        image: '/images/team/4.png',
        chefName: "Chef Aïcha Laurent",
        chefPos: "Vegetarian Chef",
        description: "Chef Aïcha Laurent focuses on plant-based cuisine, creating dishes that are healthy and full of flavor. Specialization: Indian and Mediterranean cuisine."
    },

    {
        id: 5,
        image: '/images/team/5.png',
        chefName: "Chef Marc Lefevre",
        chefPos: "Grill Master",
        description: "With expertise in grilling techniques, Chef Marc Lefevre serves meats and vegetables with deep flavors. Specialization: Italian and American BBQ."
    },
      
    {
        id: 6,
        image: '/images/team/6.png',
        chefName: "Chef Chloé Martin",
        chefPos: "Sushi Chef",
        description: "Chef Chloé Martin skills in crafting authentic sushi are impressive. Specialization: traditional Japanese sushi and modern innovations."
    },

    {
        id: 7,
        image: '/images/team/7.png',
        chefName: "Chef David Blanchet",
        chefPos: "Culinary Consultant",
        description: "As a culinary consultant, Chef David Blanchet assists restaurants in menu development and culinary strategy. Specialization: restaurant concepts and food trends."
    },
   
    {
        id: 8,
        image: '/images/team/8.png',
        chefName: "Chef Élise Bernard",
        chefPos: "Catering Manager",
        description: "With experience in the catering industry, Chef Élise Bernard designs menus for various events. Specialization: large celebrations and corporate events."
    },

]

export default TeamMembersList