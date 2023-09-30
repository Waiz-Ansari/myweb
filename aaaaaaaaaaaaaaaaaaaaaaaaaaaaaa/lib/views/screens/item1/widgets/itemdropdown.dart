import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';


const List<String> list = <String>['One', 'Two', 'Three', 'Four'];


class itemDropdown extends StatefulWidget {
  const itemDropdown({super.key});

  @override
  State<itemDropdown> createState() => _itemDropdownState();
}

class _itemDropdownState extends State<itemDropdown> {
  String dropdownValue = list.first;

  @override
  Widget build(BuildContext context) {
    return DropdownButton<String>(
      value: dropdownValue ,
      icon: const Icon(Icons.arrow_downward),
      // elevation: 5,
      // style: const TextStyle(color: Colors.deepPurple),
      // underline: Container(
      //   // height: 4,
      //   // width: 50,
      //   color: Colors.deepPurpleAccent,
      // ),
      onChanged: (String? value) {
        // This is called when the user selects an item.
        setState(() {
          dropdownValue = value!;
        });
      },
      items: list.map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(value),
        );
      }).toList(),
    );
  }
}
