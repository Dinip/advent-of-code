import '../common.dart';

void main() {
  int invalidIds = 0;
  for (String range in AoC.readInput(split: ',')) {
    final start = int.parse(range.split('-').first);
    final end = int.parse(range.split('-').last);
    for (int i = start; i <= end; i++) {
      final value = i.toString();
      if (value.substring(0, (value.length / 2).floor()) == value.substring((value.length / 2).floor())) {
        print("equal: $value - $range");
        invalidIds += i;
      }
    }
  }
  print('InvalidIds: $invalidIds');
}
