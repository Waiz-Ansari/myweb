import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

class itemFormWidget extends StatefulWidget {
  const itemFormWidget({super.key});

  @override
  State<itemFormWidget> createState() => _itemFormWidgetState();
}

class _itemFormWidgetState extends State<itemFormWidget> {
  final _formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(left: 25.0, right: 25, top: 20.0),
      child: Form(
        key: _formKey,
        child: Column(
          // crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            // const padding(
            //  padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            // )
            TextFormField(
              decoration: const InputDecoration(
                // icon: const Icon(Icons.person),
                hintText: 'Item Name',
                labelText: 'Item Name',
              ),
            ),
            TextFormField(
              decoration: const InputDecoration(
                // icon: const Icon(Icons.code_off_rounded),
                hintText: 'Item Code',
                labelText: 'Item Code',
              ),
            ),
            TextFormField(
              decoration: const InputDecoration(
                // icon: const Icon(Icons.phone),
                hintText: ' Purchase Price',
                labelText: 'Purchase Price',
              ),
            ),
            //  Container(
            //     padding: const EdgeInsets.only(left: 150.0, top: 40.0),
            //     ),
          ],
        ),
      ),
    );
  }
}
