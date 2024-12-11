// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// Ваша цель в этом ката - реализовать функцию разности, которая вычитает один список из другого и возвращает результат.
// Она должна удалить все значения из списка a, которые присутствуют в списке b, сохраняя их порядок.

arrayDiff([1, 2], [1]) == [2];

// If a value is present in b, all of its occurrences must be removed from the other:
// Если значение присутствует в b, все его вхождения должны быть удалены из другого:

arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];
