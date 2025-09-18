import HomeCard from "@/components/Homecard";
import LatestPosts from "@/components/LatestPosts";
import Homecards from "@/data/HomeCards";

const Dashboard = () => {
    return (
        <main className="px-3 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-6">
            <h1 className="font-bold text-xl mb-4">Home</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Homecards.map((card, index) => (
                    <HomeCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </div>
            <LatestPosts />
        </main>
    );
}

export default Dashboard;
