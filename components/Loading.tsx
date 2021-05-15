function Loading() {
    return (
        <div className="z-50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-80">
            <div className="p-2 bg-white rounded-full shadow-lg">
                <div className="w-24 h-24 border-[14px] rounded-full border-transparent b-t-blue animate-spin"></div>
            </div>
        </div>
    );
}

export default Loading;
