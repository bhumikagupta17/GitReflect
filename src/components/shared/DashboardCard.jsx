const DashboardCard = ({ children, className = "" }) => {
    return (
        <div
            className={`glass-card p-6 rounded-2xl w-full ${className}`}
        >
            {children}
        </div>
    );
};

export default DashboardCard;