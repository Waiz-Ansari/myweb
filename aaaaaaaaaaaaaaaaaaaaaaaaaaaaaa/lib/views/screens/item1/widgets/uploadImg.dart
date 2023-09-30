// ignore_for_file: unnecessary_string_escapes

import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';

class UloadImgWidget extends StatefulWidget {
  const UloadImgWidget({super.key});

  @override
  State<UloadImgWidget> createState() => _UloadImgWidgetState();
}

class _UloadImgWidgetState extends State<UloadImgWidget> {
  @override
  Widget build(BuildContext context) {
    return Center(
      heightFactor: 1.2,
      child: Stack(
        children: [
         const CircleAvatar(
            backgroundColor: Color.fromARGB(255, 139, 198, 225),
            radius: 64,
            // backgroundImage: NetworkImage(
            //     'https://corekarachi.pk/wp-content/uploads/2019/05/member.png'),
          ),
          Positioned(
            child: IconButton(
              onPressed: () {},
              icon: Icon(Icons.add_a_photo),
            ),
            bottom: -10,
            left: 80,
          )
        ],
      ),
    );
  }
}
