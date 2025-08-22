import { LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer, 
    Area
} from 'recharts'
  
const data = [
  { name: 'Jan', ahmed: 1000, hassan: 2400, cv:1000, amt: 2400 },
  { name: 'Feb', ahmed: 10000, hassan:1000, cv:1000, amt: 2400 },
  { name: 'March', ahmed: 3000, hassan: 2400, cv:1000, amt: 2400 },
  { name: 'April', ahmed: 4000, hassan: 2400, cv:1000, amt: 2400 },
  { name: 'May', ahmed: 5000,hassan: 2400, pv: 2000, cv:1000, amt: 2400 },
  { name: 'June', ahmed: 6000, hassan: 2400, pv: 2400, cv:1000, amt: 2400 },
  { name: 'July', ahmed: 7000, hassan: 5000, pv: 2400, cv:1000, amt: 2400 },
  { name: 'August', ahmed: 9000, pv: 2400, cv:1000, amt: 2400 },
];
function test() {
  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6 ">
          Monthly Data Visualization
        </h1>
        {/*
          ResponsiveContainer ensures the chart resizes with the parent container.
          This is crucial for making the chart responsive on different screen sizes.
        */}
        <ResponsiveContainer width="100%" aspect={1}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            
            {/*
              CartesianGrid draws the background grid lines.
              The strokeDasharray prop creates a dashed line effect.
            */}
            <CartesianGrid strokeDasharray="3 3" />
            
            {/*
              XAxis displays the data keys on the x-axis.
              dataKey="name" tells it to use the "name" property from our data objects.
            */}
            <XAxis dataKey="ahmed" />
            
            {/*
              YAxis displays the data keys on the y-axis.
            */}
            <YAxis />
            
            {/*
              Tooltip shows details when the user hovers over the chart.
              The cursor prop adds a crosshair-like effect.
            */}
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            
            {/*
              Legend shows the label for each line in the chart.
            */}
            <Legend />
            
            {/*
              Line is the core component for drawing a line.
              dataKey="pv" specifies the data to plot.
              stroke="#8884d8" sets the line color.
              activeDot adds a dot on hover.
            */}
            <Line
              type="monotone"
              dataKey="hassan"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            
            {/*
              You can add multiple lines by including more <Line /> components.
              Here's a second line with a different color and data key.
            */}
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="cv"
              stroke="pink"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
}

export default test
