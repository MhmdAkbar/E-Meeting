// dummyData.js

const dummyData = Array.from({ length: 50 }, (_, i) => {
  const statusOptions = ["Booked", "Paid", "Cancel"];
  const roomTypes = ["Small", "Medium", "Large"];
  const roomNames = ["Aster Room", "Orchid Room", "Tulip Room"];

  const randomDate = () => {
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    return `${day}/${month}/2024`;
  };

  return {
    date: randomDate(),
    roomName: roomNames[i % roomNames.length],
    roomType: roomTypes[i % roomTypes.length],
    status: statusOptions[i % statusOptions.length],
  };
});

export default dummyData;
