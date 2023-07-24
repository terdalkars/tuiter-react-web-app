import VariablesAndConstants from "./variables-and-constants";
import VariablesTypes from "./variable-types"
import BooleanVariables from "./boolean-variables"
import IfElse from "./if-else"
import TernaryOperator from "./ternary-operator"
import WorkingWithFunctions from "./working-with-functions";
import WorkingWithArrays from "./working-with-arrays"
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructing";
import DestructingFunctions from "./destructing-functions";
import TemplateLiterals from "./template-literals";

function JavaScript() {
    console.log('Hello World!');
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariablesTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <TemplateLiterals/>
            <House/>
            <Spread/>
            <Destructing/>
            <DestructingFunctions/>
        </div>
    );
}
export default JavaScript