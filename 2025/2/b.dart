import '../common.dart';

void main() {
  int invalidIds = 0;
  for (String range in AoC.readInput(split: ',')) {
    // starting with 0 doesn't change the final sum and prevents an empty set that breaks reduce :)
    final unique = Set<int>.from([0]);
    final start = int.parse(range.split('-').first);
    final end = int.parse(range.split('-').last);
    for (int i = start; i <= end; i++) {
      final value = i.toString();
      final halfLength = (value.length / 2).floor();
      for (int k = 1; k <= halfLength; k++) {
        for (int j = 1; j <= value.length; j++) {
          if (value == '${value.substring(0, k)}' * j) {
            print("equal: $value - $range");
            unique.add(i);
          }
        }
      }
    }
    invalidIds += unique.reduce((sum, elem) => sum += elem);
  }
  print('InvalidIds: $invalidIds');
}
