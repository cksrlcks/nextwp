import Banner from "@/components/Banner";
import SpotList from "@/components/SpotList";

export default function Home() {
    return (
        <div className="app">
            <div className="app-inner">
                <header>앱해더</header>
                <div>
                    <div style={{ height: "400vh" }}>
                        <SpotList />
                    </div>
                </div>
                <Banner />
            </div>
        </div>
    );
}
