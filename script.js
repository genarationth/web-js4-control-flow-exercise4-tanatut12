const dayNumber = 3;
const dayName = dayNumber === 0 ? "sunday"
            :dayNumber === 1 ? "monday"
            :dayNumber === 2 ? "tuesday"
            :dayNumber === 3 ? "wednesday"
            :dayNumber === 4 ? "thursday"
            :dayNumber === 5 ? "friday"
            :dayNumber === 6 ? "saturday"
            :"invalid day number";
            console.log(dayName);