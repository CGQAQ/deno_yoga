import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("rounding_flex_basis_flex_grow_row_width_of_100", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      33 === root_child0.getComputedWidth(),
      "33 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      33 === root_child1.getComputedLeft(),
      "33 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      34 === root_child1.getComputedWidth(),
      "34 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      67 === root_child2.getComputedLeft(),
      "67 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      33 === root_child2.getComputedWidth(),
      "33 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      67 === root_child0.getComputedLeft(),
      "67 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      33 === root_child0.getComputedWidth(),
      "33 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      33 === root_child1.getComputedLeft(),
      "33 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      34 === root_child1.getComputedWidth(),
      "34 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      33 === root_child2.getComputedWidth(),
      "33 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_flex_basis_flex_grow_row_prime_number_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(113);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setFlexGrow(1);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setFlexGrow(1);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(113 === root.getComputedWidth(), "113 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      23 === root_child0.getComputedWidth(),
      "23 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      23 === root_child1.getComputedLeft(),
      "23 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      22 === root_child1.getComputedWidth(),
      "22 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      45 === root_child2.getComputedLeft(),
      "45 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      23 === root_child2.getComputedWidth(),
      "23 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      68 === root_child3.getComputedLeft(),
      "68 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      22 === root_child3.getComputedWidth(),
      "22 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      100 === root_child3.getComputedHeight(),
      "100 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      90 === root_child4.getComputedLeft(),
      "90 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      23 === root_child4.getComputedWidth(),
      "23 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      100 === root_child4.getComputedHeight(),
      "100 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(113 === root.getComputedWidth(), "113 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      90 === root_child0.getComputedLeft(),
      "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      23 === root_child0.getComputedWidth(),
      "23 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      68 === root_child1.getComputedLeft(),
      "68 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      22 === root_child1.getComputedWidth(),
      "22 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      45 === root_child2.getComputedLeft(),
      "45 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      23 === root_child2.getComputedWidth(),
      "23 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      23 === root_child3.getComputedLeft(),
      "23 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      22 === root_child3.getComputedWidth(),
      "22 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      100 === root_child3.getComputedHeight(),
      "100 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      0 === root_child4.getComputedLeft(),
      "0 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      23 === root_child4.getComputedWidth(),
      "23 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      100 === root_child4.getComputedHeight(),
      "100 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_flex_basis_flex_shrink_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(101);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexShrink(1);
    root_child0.setFlexBasis(100);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexBasis(25);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexBasis(25);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(101 === root.getComputedWidth(), "101 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      51 === root_child0.getComputedWidth(),
      "51 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      51 === root_child1.getComputedLeft(),
      "51 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      25 === root_child1.getComputedWidth(),
      "25 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      76 === root_child2.getComputedLeft(),
      "76 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      25 === root_child2.getComputedWidth(),
      "25 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(101 === root.getComputedWidth(), "101 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      51 === root_child0.getComputedWidth(),
      "51 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1.getComputedLeft(),
      "25 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      25 === root_child1.getComputedWidth(),
      "25 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      25 === root_child2.getComputedWidth(),
      "25 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_flex_basis_overrides_main_size", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(113);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis(50);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      64 === root_child0.getComputedHeight(),
      "64 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      64 === root_child1.getComputedTop(),
      "64 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      64 === root_child0.getComputedHeight(),
      "64 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      64 === root_child1.getComputedTop(),
      "64 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_total_fractial", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(87.4);
    root.setHeight(113.4);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(0.7);
    root_child0.setFlexBasis(50.3);
    root_child0.setHeight(20.3);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1.6);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1.1);
    root_child2.setHeight(10.7);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(87 === root.getComputedWidth(), "87 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      87 === root_child0.getComputedWidth(),
      "87 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      59 === root_child0.getComputedHeight(),
      "59 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      59 === root_child1.getComputedTop(),
      "59 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      87 === root_child1.getComputedWidth(),
      "87 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      30 === root_child1.getComputedHeight(),
      "30 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      87 === root_child2.getComputedWidth(),
      "87 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(87 === root.getComputedWidth(), "87 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      87 === root_child0.getComputedWidth(),
      "87 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      59 === root_child0.getComputedHeight(),
      "59 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      59 === root_child1.getComputedTop(),
      "59 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      87 === root_child1.getComputedWidth(),
      "87 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      30 === root_child1.getComputedHeight(),
      "30 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      87 === root_child2.getComputedWidth(),
      "87 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_total_fractial_nested", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(87.4);
    root.setHeight(113.4);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(0.7);
    root_child0.setFlexBasis(50.3);
    root_child0.setHeight(20.3);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexGrow(1);
    root_child0_child0.setFlexBasis(0.3);
    root_child0_child0.setPosition(Yoga.EDGE_BOTTOM, 13.3);
    root_child0_child0.setHeight(9.9);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child1 = Yoga.Node.create(config);
    root_child0_child1.setFlexGrow(4);
    root_child0_child1.setFlexBasis(0.3);
    root_child0_child1.setPosition(Yoga.EDGE_TOP, 13.3);
    root_child0_child1.setHeight(1.1);
    root_child0.insertChild(root_child0_child1, 1);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1.6);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1.1);
    root_child2.setHeight(10.7);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(87 === root.getComputedWidth(), "87 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      87 === root_child0.getComputedWidth(),
      "87 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      59 === root_child0.getComputedHeight(),
      "59 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      -13 === root_child0_child0.getComputedTop(),
      "-13 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      87 === root_child0_child0.getComputedWidth(),
      "87 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      12 === root_child0_child0.getComputedHeight(),
      "12 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1.getComputedLeft(),
      "0 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      25 === root_child0_child1.getComputedTop(),
      "25 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      87 === root_child0_child1.getComputedWidth(),
      "87 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      47 === root_child0_child1.getComputedHeight(),
      "47 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      59 === root_child1.getComputedTop(),
      "59 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      87 === root_child1.getComputedWidth(),
      "87 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      30 === root_child1.getComputedHeight(),
      "30 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      87 === root_child2.getComputedWidth(),
      "87 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(87 === root.getComputedWidth(), "87 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      87 === root_child0.getComputedWidth(),
      "87 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      59 === root_child0.getComputedHeight(),
      "59 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      -13 === root_child0_child0.getComputedTop(),
      "-13 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      87 === root_child0_child0.getComputedWidth(),
      "87 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      12 === root_child0_child0.getComputedHeight(),
      "12 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1.getComputedLeft(),
      "0 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      25 === root_child0_child1.getComputedTop(),
      "25 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      87 === root_child0_child1.getComputedWidth(),
      "87 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      47 === root_child0_child1.getComputedHeight(),
      "47 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      59 === root_child1.getComputedTop(),
      "59 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      87 === root_child1.getComputedWidth(),
      "87 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      30 === root_child1.getComputedHeight(),
      "30 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      87 === root_child2.getComputedWidth(),
      "87 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_fractial_input_1", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(113.4);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis(50);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      64 === root_child0.getComputedHeight(),
      "64 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      64 === root_child1.getComputedTop(),
      "64 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      64 === root_child0.getComputedHeight(),
      "64 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      64 === root_child1.getComputedTop(),
      "64 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_fractial_input_2", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(113.6);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis(50);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(114 === root.getComputedHeight(), "114 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      65 === root_child0.getComputedHeight(),
      "65 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      65 === root_child1.getComputedTop(),
      "65 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      24 === root_child1.getComputedHeight(),
      "24 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      25 === root_child2.getComputedHeight(),
      "25 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(114 === root.getComputedHeight(), "114 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      65 === root_child0.getComputedHeight(),
      "65 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      65 === root_child1.getComputedTop(),
      "65 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      24 === root_child1.getComputedHeight(),
      "24 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      25 === root_child2.getComputedHeight(),
      "25 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_fractial_input_3", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setPosition(Yoga.EDGE_TOP, 0.3);
    root.setWidth(100);
    root.setHeight(113.4);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis(50);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(114 === root.getComputedHeight(), "114 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      65 === root_child0.getComputedHeight(),
      "65 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      64 === root_child1.getComputedTop(),
      "64 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      24 === root_child1.getComputedHeight(),
      "24 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      25 === root_child2.getComputedHeight(),
      "25 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(114 === root.getComputedHeight(), "114 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      65 === root_child0.getComputedHeight(),
      "65 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      64 === root_child1.getComputedTop(),
      "64 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      24 === root_child1.getComputedHeight(),
      "24 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      25 === root_child2.getComputedHeight(),
      "25 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_fractial_input_4", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setPosition(Yoga.EDGE_TOP, 0.7);
    root.setWidth(100);
    root.setHeight(113.4);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexBasis(50);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(1 === root.getComputedTop(), "1 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      64 === root_child0.getComputedHeight(),
      "64 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      64 === root_child1.getComputedTop(),
      "64 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(1 === root.getComputedTop(), "1 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(113 === root.getComputedHeight(), "113 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      64 === root_child0.getComputedHeight(),
      "64 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      64 === root_child1.getComputedTop(),
      "64 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      89 === root_child2.getComputedTop(),
      "89 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      24 === root_child2.getComputedHeight(),
      "24 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_inner_node_controversy_horizontal", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(320);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setFlexGrow(1);
    root_child1_child0.setHeight(10);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(320 === root.getComputedWidth(), "320 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(10 === root.getComputedHeight(), "10 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      107 === root_child0.getComputedWidth(),
      "107 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      107 === root_child1.getComputedLeft(),
      "107 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      106 === root_child1.getComputedWidth(),
      "106 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      106 === root_child1_child0.getComputedWidth(),
      "106 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      213 === root_child2.getComputedLeft(),
      "213 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      107 === root_child2.getComputedWidth(),
      "107 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(320 === root.getComputedWidth(), "320 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(10 === root.getComputedHeight(), "10 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      213 === root_child0.getComputedLeft(),
      "213 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      107 === root_child0.getComputedWidth(),
      "107 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      107 === root_child1.getComputedLeft(),
      "107 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      106 === root_child1.getComputedWidth(),
      "106 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      106 === root_child1_child0.getComputedWidth(),
      "106 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      107 === root_child2.getComputedWidth(),
      "107 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_inner_node_controversy_vertical", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setHeight(320);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setFlexGrow(1);
    root_child1_child0.setWidth(10);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(10 === root.getComputedWidth(), "10 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(320 === root.getComputedHeight(), "320 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      107 === root_child0.getComputedHeight(),
      "107 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      107 === root_child1.getComputedTop(),
      "107 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      106 === root_child1.getComputedHeight(),
      "106 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedWidth(),
      "10 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      106 === root_child1_child0.getComputedHeight(),
      "106 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      213 === root_child2.getComputedTop(),
      "213 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      107 === root_child2.getComputedHeight(),
      "107 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(10 === root.getComputedWidth(), "10 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(320 === root.getComputedHeight(), "320 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      107 === root_child0.getComputedHeight(),
      "107 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      107 === root_child1.getComputedTop(),
      "107 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      106 === root_child1.getComputedHeight(),
      "106 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedWidth(),
      "10 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      106 === root_child1_child0.getComputedHeight(),
      "106 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      213 === root_child2.getComputedTop(),
      "213 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      107 === root_child2.getComputedHeight(),
      "107 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("rounding_inner_node_controversy_combined", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(640);
    root.setHeight(320);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setHeight("100%");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setHeight("100%");
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setFlexGrow(1);
    root_child1_child0.setWidth("100%");
    root_child1.insertChild(root_child1_child0, 0);

    var root_child1_child1 = Yoga.Node.create(config);
    root_child1_child1.setFlexGrow(1);
    root_child1_child1.setWidth("100%");
    root_child1.insertChild(root_child1_child1, 1);

    var root_child1_child1_child0 = Yoga.Node.create(config);
    root_child1_child1_child0.setFlexGrow(1);
    root_child1_child1_child0.setWidth("100%");
    root_child1_child1.insertChild(root_child1_child1_child0, 0);

    var root_child1_child2 = Yoga.Node.create(config);
    root_child1_child2.setFlexGrow(1);
    root_child1_child2.setWidth("100%");
    root_child1.insertChild(root_child1_child2, 2);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setFlexGrow(1);
    root_child2.setHeight("100%");
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(640 === root.getComputedWidth(), "640 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(320 === root.getComputedHeight(), "320 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      213 === root_child0.getComputedWidth(),
      "213 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      320 === root_child0.getComputedHeight(),
      "320 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      213 === root_child1.getComputedLeft(),
      "213 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      214 === root_child1.getComputedWidth(),
      "214 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      320 === root_child1.getComputedHeight(),
      "320 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      214 === root_child1_child0.getComputedWidth(),
      "214 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      107 === root_child1_child0.getComputedHeight(),
      "107 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child1.getComputedLeft(),
      "0 === root_child1_child1.getComputedLeft() (" + root_child1_child1.getComputedLeft() + ")",
    );
    assert(
      107 === root_child1_child1.getComputedTop(),
      "107 === root_child1_child1.getComputedTop() (" + root_child1_child1.getComputedTop() + ")",
    );
    assert(
      214 === root_child1_child1.getComputedWidth(),
      "214 === root_child1_child1.getComputedWidth() (" + root_child1_child1.getComputedWidth() + ")",
    );
    assert(
      106 === root_child1_child1.getComputedHeight(),
      "106 === root_child1_child1.getComputedHeight() (" + root_child1_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child1_child0.getComputedLeft(),
      "0 === root_child1_child1_child0.getComputedLeft() (" + root_child1_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child1_child0.getComputedTop(),
      "0 === root_child1_child1_child0.getComputedTop() (" + root_child1_child1_child0.getComputedTop() + ")",
    );
    assert(
      214 === root_child1_child1_child0.getComputedWidth(),
      "214 === root_child1_child1_child0.getComputedWidth() (" + root_child1_child1_child0.getComputedWidth() + ")",
    );
    assert(
      106 === root_child1_child1_child0.getComputedHeight(),
      "106 === root_child1_child1_child0.getComputedHeight() (" + root_child1_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child2.getComputedLeft(),
      "0 === root_child1_child2.getComputedLeft() (" + root_child1_child2.getComputedLeft() + ")",
    );
    assert(
      213 === root_child1_child2.getComputedTop(),
      "213 === root_child1_child2.getComputedTop() (" + root_child1_child2.getComputedTop() + ")",
    );
    assert(
      214 === root_child1_child2.getComputedWidth(),
      "214 === root_child1_child2.getComputedWidth() (" + root_child1_child2.getComputedWidth() + ")",
    );
    assert(
      107 === root_child1_child2.getComputedHeight(),
      "107 === root_child1_child2.getComputedHeight() (" + root_child1_child2.getComputedHeight() + ")",
    );

    assert(
      427 === root_child2.getComputedLeft(),
      "427 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      213 === root_child2.getComputedWidth(),
      "213 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      320 === root_child2.getComputedHeight(),
      "320 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(640 === root.getComputedWidth(), "640 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(320 === root.getComputedHeight(), "320 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      427 === root_child0.getComputedLeft(),
      "427 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      213 === root_child0.getComputedWidth(),
      "213 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      320 === root_child0.getComputedHeight(),
      "320 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      213 === root_child1.getComputedLeft(),
      "213 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      214 === root_child1.getComputedWidth(),
      "214 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      320 === root_child1.getComputedHeight(),
      "320 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      214 === root_child1_child0.getComputedWidth(),
      "214 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      107 === root_child1_child0.getComputedHeight(),
      "107 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child1.getComputedLeft(),
      "0 === root_child1_child1.getComputedLeft() (" + root_child1_child1.getComputedLeft() + ")",
    );
    assert(
      107 === root_child1_child1.getComputedTop(),
      "107 === root_child1_child1.getComputedTop() (" + root_child1_child1.getComputedTop() + ")",
    );
    assert(
      214 === root_child1_child1.getComputedWidth(),
      "214 === root_child1_child1.getComputedWidth() (" + root_child1_child1.getComputedWidth() + ")",
    );
    assert(
      106 === root_child1_child1.getComputedHeight(),
      "106 === root_child1_child1.getComputedHeight() (" + root_child1_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child1_child0.getComputedLeft(),
      "0 === root_child1_child1_child0.getComputedLeft() (" + root_child1_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child1_child0.getComputedTop(),
      "0 === root_child1_child1_child0.getComputedTop() (" + root_child1_child1_child0.getComputedTop() + ")",
    );
    assert(
      214 === root_child1_child1_child0.getComputedWidth(),
      "214 === root_child1_child1_child0.getComputedWidth() (" + root_child1_child1_child0.getComputedWidth() + ")",
    );
    assert(
      106 === root_child1_child1_child0.getComputedHeight(),
      "106 === root_child1_child1_child0.getComputedHeight() (" + root_child1_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child2.getComputedLeft(),
      "0 === root_child1_child2.getComputedLeft() (" + root_child1_child2.getComputedLeft() + ")",
    );
    assert(
      213 === root_child1_child2.getComputedTop(),
      "213 === root_child1_child2.getComputedTop() (" + root_child1_child2.getComputedTop() + ")",
    );
    assert(
      214 === root_child1_child2.getComputedWidth(),
      "214 === root_child1_child2.getComputedWidth() (" + root_child1_child2.getComputedWidth() + ")",
    );
    assert(
      107 === root_child1_child2.getComputedHeight(),
      "107 === root_child1_child2.getComputedHeight() (" + root_child1_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      213 === root_child2.getComputedWidth(),
      "213 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      320 === root_child2.getComputedHeight(),
      "320 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
