import img from './404_error_checking_FI.avif';

const ErrorMessage = () => {
    return (
        <img
            src={img}
            alt='error img'
            style={{ height: 250, width: 550, objectFit: 'cover' }}
        />
    );
};

export default ErrorMessage;
