import { useContext } from "react";
import { AuthC } from "../../../Provider/AuthProviderx";
import { Card } from "flowbite-react";
import { Helmet } from "react-helmet";

const UserProfile = () => {
    const {user} = useContext(AuthC);
    console.log(user);
    // const date = new Date(user.metadata.lastSignInTime)
    // console.log(date)
    return (
        <div className="flex my-20 justify-center mx-auto">
          <Helmet>
                <title>Your Profile</title>
      </Helmet>
      <Card className="md:min-w-[600px] max-h-[400px] ">
      <div className="flex justify-end px-4 pt-4">

      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt={user.displayName}
          height="96"
          src={user.photoURL}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.displayName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
        <div className="mt-5">
        <p>Last Logged in on:<span className="text-sm text-gray-500 dark:text-gray-400">{user.metadata.lastSignInTime}</span></p>
        </div>
      </div>
      </Card>
            
        </div>
    );
};

export default UserProfile;