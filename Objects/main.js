// 1
const checkValues = (obj, value) => {
  if (Object.values(obj).includes(value)) {
    return true;
  } else {
    return false;
  }
};

// 2
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  return Object.keys(obj);
};

// 3
const updateNumbers = (obj) => {
  let result = [];
  for (const key in obj) {
    result.push(key + ": " + obj[key]);
  }
  return result;
};

// 4
const PassedOrFailed = function (studentGrades) {
  for (const key in studentGrades) {
    if (studentGrades[key].grade >= studentGrades[key].total / 2) {
      return "The student have passed";
    } else {
      return "The student have failed";
    }
  }
};

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

// 5
const totalCharacters = (arr) => {
  let size = 0;
  for (const i in arr) {
    size += arr[i].length;
  }
  return size;
};

// 6
const houseSize = (arr) => {
  let sizes = [];
  for (let i = 0; i < arr.length; i += 2) {
    sizes.push({ home: arr[i], member: arr[i + 1] });
  }
  return sizes;
};

// 7
const uniqueDogs = {
  max: { breed: "Labrador Retriever", color: "blond" },
  rex: { breed: "German Shepherd", color: "black and brown" },
  lucy: { breed: "Bulldog", color: "white" },
  lucifer: { breed: "Chihuahua", color: "brown" },
};

const createDog = function (name, dogBreed, furColor) {
        if(!Object.keys(uniqueDogs).includes(name)){
            uniqueDogs[name] = { breed: dogBreed, color: furColor};
            return "Added the dog successfully"
        } else {
            return "The dog isn't unique enough :("
        }
};
