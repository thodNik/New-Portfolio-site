const PageHeading = ({title, icon}) => {
    return (
        <div className="flex justify-between items-center pb-4 border-dashed border-b border-gray-500">
            <h1 className="font-playfair font-bold text-orange-400 text-4xl">
                {title}
            </h1>
            <div className="hidden md:block">
                {icon}
            </div>
        </div>
    );
};

export default PageHeading;