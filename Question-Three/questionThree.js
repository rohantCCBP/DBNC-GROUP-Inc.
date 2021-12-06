const personalInfo= [
{id:1, name:"Dan", value:150},
{id:2, name:"Peter", value:300},
{id:3, name:"Mark", value:400},
{id:4, name:"Victor", value:600}
];

const sumArrValues = personalInfo.reduce((prevValue, curValue) => ({value: prevValue.value + curValue.value}));

console.log(sumArrValues.value);