import React from 'react';
import * as algorithms from "../algorithms/algorithms"
import './visualizer.css';

const PRIMARY_COLOR = 'red';

export default class Visualizer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			array: [],
		};
	}

	componentDidMount() {
		this.resetArray();
    }
    
    resetArray() {
        const array = [];
        for (let i = 0; i < 310; i++) {
            array.push(randomInt(5,730));
        }
        this.setState({array});
    }

    mergeSort() {
        const jsSortedArray = this.state.array
        .slice()
        .sort((a,b) => a - b);
        const sortedArray = algorithms.mergeSort(this.state.array);
        console.log(sortedArray)
        console.log(jsSortedArray)

        console.log(arraysAreEqual(jsSortedArray, sortedArray))
    }
    bubbleSort() {}
    heapSort() {}
    quickSort() {}

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array!</button>
             <button onClick={() => this.mergeSort()}>Merge Sort</button>
             <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
             <button onClick={() => this.heapSort()}>Heap Sort</button>
             <button onClick={() => this.quickSort()}>Quick Sort</button>
            </div>
        )

    }
}

function randomInt(min,max) {

    return Math.floor(Math.random() * (max-min + 1) + min)
}

function arraysAreEqual (arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for(let i=0;i< arrayOne.length;i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}