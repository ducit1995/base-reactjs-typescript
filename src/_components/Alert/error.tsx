
type AlertErrorType = {
    message: string;
    notShowError: boolean;
};

function AlertError(props:AlertErrorType) {
    if (props.notShowError) {
        return null;
    } else {
        return (
            <div className="error mb-4">
                <p className="text-center text-E95814 text-sm font-normal">{props.message}</p>
            </div>
        );
    }

}

export { AlertError };