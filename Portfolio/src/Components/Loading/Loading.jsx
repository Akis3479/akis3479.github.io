import { bouncyArc } from "ldrs";
import "./styles.css";


export const Loading = () => {

    bouncyArc.register();
    return (
        <div className="backgroundDiv">
        <l-bouncy-arc
            size="110"
            speed="1.65"
            color="white"
        ></l-bouncy-arc>
        </div>
    );
};