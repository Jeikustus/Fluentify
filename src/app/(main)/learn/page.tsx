import { StickyWrapper, FeedWrapper } from "@/components";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-48 px-6">
      <StickyWrapper>MY STICKY SIDE BAR</StickyWrapper>
      <FeedWrapper>MY FEED SIDE BAR</FeedWrapper>
    </div>
  );
};

export default LearnPage;
