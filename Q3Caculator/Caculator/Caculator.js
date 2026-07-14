import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import styles from "./style";

export function Caculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');

    const handleNumberInput = (num) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString());
        } else {
            setDisplayValue(displayValue + num.toString());
        }
    };
    const handleOperatorInput = (operator) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };
    const handleEqual = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);
        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());
        } else if (operator === '*') {
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '/') {
            setDisplayValue((num1 / num2).toString());
        }
        setOperator(null);
        setFirstValue('');
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.display}>{Number(displayValue)}</Text>
            <View style={styles.row}>
                {[7, 8, 9].map((n) => (
                    <TouchableOpacity
                        key={n}
                        style={styles.button}
                        onPress={() => handleNumberInput(n)}>
                        <Text style={styles.text}>{n}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    style={[styles.button, styles.operator]}
                    onPress={() => handleOperatorInput("/")}>
                    <Text style={styles.operatorText}>÷</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                {[4, 5, 6].map((n) => (
                    <TouchableOpacity
                        key={n}
                        style={styles.button}
                        onPress={() => handleNumberInput(n)}>
                        <Text style={styles.text}>{n}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    style={[styles.button, styles.operator]}
                    onPress={() => handleOperatorInput("*")}>
                    <Text style={styles.operatorText}>×</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                {[1, 2, 3].map((n) => (
                    <TouchableOpacity
                        key={n}
                        style={styles.button}
                        onPress={() => handleNumberInput(n)}>
                        <Text style={styles.text}>{n}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    style={[styles.button, styles.operator]}
                    onPress={() => handleOperatorInput("-")}>
                    <Text style={styles.operatorText}>−</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.buttonWide}
                    onPress={() => handleNumberInput(0)}>
                    <Text style={styles.text}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.operator]}
                    onPress={() => handleOperatorInput("+")}>
                    <Text style={styles.operatorText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.equal]}
                    onPress={handleEqual}>
                    <Text style={styles.equalText}>=</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.clear}
                onPress={handleClear}>
                <Text style={styles.clearText}>C</Text>
            </TouchableOpacity>
        </View>
    );
}