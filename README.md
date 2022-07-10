1. How long did you spend on the coding assignment?
   Ans-It took 5,6 hours.

a. What would you add to your solution if you had more time?
Ans-I would have added filter option along with sorting,as well as i would have created books details screen so user could click the book and view the deatil information about that book.

b. If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
Ans- It took approx 1.5 hours for coding test.I would have added more time in business logic,functionality and design part of the application,because performance of application depends on this things.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
   Ans- React 18 is new version of React.Recently added features in React 18 version Automatic batching,Suspense features,New strict mode behaviours,new hooks-useId,useTransition.

I used lazyloading -
const BooksSearchResult = lazy(() =>
import("../components/BooksSearchResult/BooksSearchResult")
);

const Books = () => {
const { apiRequestStatus } = useBooksContext();
return (

<main>
<Navbar />
<section className="container">
<BookSearchBox />
{apiRequestStatus === "fulfilled" && <BooksSearchResult />}
{apiRequestStatus === "loading" && <Spinner />}
{apiRequestStatus === "failed" && (
<h1 className="error-message">
Something went wrong please try again later
</h1>
)}
</section>
</main>
);
};

3. How would you track down a performance issue in production? Have you ever had to do this?
   Ans-We can use external services to track performance of our app such as sentry it tells us is any bug in production app,it trace them and give us notification, Chrome Performance tab, a great resource to find issues,DevTools,Performance tab-profiling by reloading the page,Profiler API.

4. How would you improve the API that you just used?
   Ans-Limit Payloads- large payloads can take a long time to create on the server and even longer to download on a client. heavy payloads of data slow down processes and reduce performance.
   Faster Network-Slow networks impact the performance of even the best designed APIs.
   Caching is one of the best ways to improve API performance.
   filtering plays an important part in optimizing an API.

5. Please describe yourself using correctly formatted JSON.
   const AboutJyoti =[
   {
   "name":"jyoti",
   "age":30,
   "Email": "jyoti.dee@example.org",
   "BirthDate": "1945-07-04"
   "qualification":"B.tech in computer engineering",
   "address":"Canada"
   }
