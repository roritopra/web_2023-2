import useFetchFacts from '../hooks/useFetchFacts';

function RenderFacts() {
    const { data: catsFacts, isLoadingFacts } = useFetchFacts('https://catfact.ninja/fact');

    return (
        <>
        {isLoadingFacts? (
        <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    ) : (
        <div className="jokes-list">
            <div key={catsFacts}>
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Random Cats
                </h5>
                <h2  className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">{catsFacts.fact}</h2>
            </div>
        </div>
    )}
    </>
    )
}

export { RenderFacts }