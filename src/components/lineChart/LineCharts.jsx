import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LineCharts = () => {
    const studentData = [
            { "id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 90 },
            { "id": 2, "name": "Bob", "math_marks": 76, "physics_marks": 82 },
            { "id": 3, "name": "Charlie", "math_marks": 92, "physics_marks": 88 },
            { "id": 4, "name": "David", "math_marks": 65, "physics_marks": 75 },
            { "id": 5, "name": "Eva", "math_marks": 89, "physics_marks": 95 },
            { "id": 6, "name": "Frank", "math_marks": 72, "physics_marks": 78 },
            { "id": 7, "name": "Grace", "math_marks": 95, "physics_marks": 92 },
            { "id": 8, "name": "Henry", "math_marks": 88, "physics_marks": 85 },
            { "id": 9, "name": "Ivy", "math_marks": 79, "physics_marks": 80 },
            { "id": 10, "name": "Jack", "math_marks": 91, "physics_marks": 87 }
    ];
    return (
        <div className='w-10/12 mx-auto'>
            <LineChart width={600} height={400} data={studentData} > 
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="math_marks" stroke='red'> </Line>
            <Line dataKey="physics_marks" stroke="yellow"></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;