export default async function Home() {
  interface props {
    name: string;
    caption: string;
  }
  const res = await fetch("http://localhost:3500/feed");
  const feedData: props[] = await res.json();
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-[400px]">
        {feedData.map((feed, idx) => {
          return (
            <div key={idx}>
              <div>{feed.name}</div>
              <div>{feed.caption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
