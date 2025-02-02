// این کامپوننت مربوط به نمایش قالب مثل یوتیوب قبل از لود شدن اطلاعات صفحه است
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingUsers = () => {
  return Array(6)
    .fill({})
    .map(() => {
      return (
        <div className="col-4 text-center p-5">
          <Skeleton className="mb-4" circle={true} height={100} width={100} customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
          <Skeleton className="mb-2" height={30} count={2}  />
        </div>
      );
    });
};

export default LoadingUsers;
