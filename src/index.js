
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == 0 || typeof(matrix)=="undefined") return []
  let answer= []
  k=0
  for (let i=0;i<matrix.length;i++){
    if (i%2==0) {
      for (let j=0;j<matrix[i].length;j++){
        answer[k]=matrix[i][j]
        k++
      }
    }
    else{
      for (let j=matrix[i].length-1;j>-1;j--){
        answer[k]=matrix[i][j]
        k++
      }
    }
  }
  return answer;
}
