export const KetrampilanItem = ({
    reverse,
    icon,
    title,
    children,
    ...props
}) => {
    return (
        <div className="grid grid-cols-2" {...props}>
            <div className={!reverse ? "order-1" : "order-2"}>
                <div className="flex flex-row items-center gap-4">
                    <img src={icon} width="50" height="50" alt="RPL" />
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        {title}
                    </h3>
                </div>
                {children}
            </div>
            <div className={!reverse ? "order-2" : "order-1"}></div>
        </div>
    );
};
