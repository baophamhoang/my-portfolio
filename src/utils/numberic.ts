export function findClosestSmallerBinarySearch(arr: number[], num: number) {
  let left = 0;
  let right = arr.length - 1;
  let closestSmaller = null;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] <= num) {
      closestSmaller = arr[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return closestSmaller;
}