import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("margin_start", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_START, 10);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_top", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_TOP, 10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
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
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setJustifyContent(Yoga.JUSTIFY_FLEX_END);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_END, 10);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_bottom", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_FLEX_END);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_BOTTOM, 10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
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
      80 === root_child0.getComputedTop(),
      "80 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0.getComputedTop(),
      "80 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_and_flex_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setMargin(Yoga.EDGE_START, 10);
    root_child0.setMargin(Yoga.EDGE_END, 10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      80 === root_child0.getComputedWidth(),
      "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      80 === root_child0.getComputedWidth(),
      "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_and_flex_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setMargin(Yoga.EDGE_TOP, 10);
    root_child0.setMargin(Yoga.EDGE_BOTTOM, 10);
    root.insertChild(root_child0, 0);
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
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_and_stretch_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setMargin(Yoga.EDGE_TOP, 10);
    root_child0.setMargin(Yoga.EDGE_BOTTOM, 10);
    root.insertChild(root_child0, 0);
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
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_and_stretch_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setMargin(Yoga.EDGE_START, 10);
    root_child0.setMargin(Yoga.EDGE_END, 10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      80 === root_child0.getComputedWidth(),
      "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      80 === root_child0.getComputedWidth(),
      "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_with_sibling_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setMargin(Yoga.EDGE_END, 10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root.insertChild(root_child1, 1);
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
      45 === root_child0.getComputedWidth(),
      "45 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      55 === root_child1.getComputedLeft(),
      "55 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      45 === root_child1.getComputedWidth(),
      "45 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      55 === root_child0.getComputedLeft(),
      "55 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      45 === root_child0.getComputedWidth(),
      "45 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      45 === root_child1.getComputedWidth(),
      "45 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_with_sibling_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setMargin(Yoga.EDGE_BOTTOM, 10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root.insertChild(root_child1, 1);
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
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      45 === root_child0.getComputedHeight(),
      "45 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      55 === root_child1.getComputedTop(),
      "55 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      45 === root_child1.getComputedHeight(),
      "45 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

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
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      45 === root_child0.getComputedHeight(),
      "45 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      55 === root_child1.getComputedTop(),
      "55 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      45 === root_child1.getComputedHeight(),
      "45 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_bottom", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_BOTTOM, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_top", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_TOP, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      100 === root_child0.getComputedTop(),
      "100 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      100 === root_child0.getComputedTop(),
      "100 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_bottom_and_top", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_TOP, "auto");
    root_child0.setMargin(Yoga.EDGE_BOTTOM, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0.getComputedTop(),
      "50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0.getComputedTop(),
      "50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_bottom_and_top_justify_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_TOP, "auto");
    root_child0.setMargin(Yoga.EDGE_BOTTOM, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0.getComputedTop(),
      "50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      150 === root_child0.getComputedLeft(),
      "150 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0.getComputedTop(),
      "50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      150 === root_child1.getComputedLeft(),
      "150 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_mutiple_children_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_TOP, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setMargin(Yoga.EDGE_TOP, "auto");
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root_child2.setHeight(50);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      25 === root_child0.getComputedTop(),
      "25 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      100 === root_child1.getComputedTop(),
      "100 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      75 === root_child2.getComputedLeft(),
      "75 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      150 === root_child2.getComputedTop(),
      "150 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      25 === root_child0.getComputedTop(),
      "25 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      100 === root_child1.getComputedTop(),
      "100 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      75 === root_child2.getComputedLeft(),
      "75 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      150 === root_child2.getComputedTop(),
      "150 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_mutiple_children_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root_child2.setHeight(50);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      75 === root_child0.getComputedTop(),
      "75 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      75 === root_child1.getComputedTop(),
      "75 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      150 === root_child2.getComputedLeft(),
      "150 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      75 === root_child2.getComputedTop(),
      "75 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      125 === root_child0.getComputedLeft(),
      "125 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      75 === root_child0.getComputedTop(),
      "75 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      75 === root_child1.getComputedTop(),
      "75 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      75 === root_child2.getComputedTop(),
      "75 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      50 === root_child2.getComputedHeight(),
      "50 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left_and_right_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root_child0.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      75 === root_child0.getComputedTop(),
      "75 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      150 === root_child1.getComputedLeft(),
      "150 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      75 === root_child1.getComputedTop(),
      "75 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      75 === root_child0.getComputedTop(),
      "75 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      75 === root_child1.getComputedTop(),
      "75 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left_and_right", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root_child0.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      150 === root_child1.getComputedLeft(),
      "150 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_start_and_end_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_START, "auto");
    root_child0.setMargin(Yoga.EDGE_END, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      75 === root_child0.getComputedTop(),
      "75 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      150 === root_child1.getComputedLeft(),
      "150 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      75 === root_child1.getComputedTop(),
      "75 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      75 === root_child0.getComputedTop(),
      "75 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      75 === root_child1.getComputedTop(),
      "75 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_start_and_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_START, "auto");
    root_child0.setMargin(Yoga.EDGE_END, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      150 === root_child1.getComputedLeft(),
      "150 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left_and_right_column_and_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root_child0.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      75 === root_child0.getComputedLeft(),
      "75 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      150 === root_child0.getComputedLeft(),
      "150 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      150 === root_child0.getComputedLeft(),
      "150 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_right", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left_and_right_strech", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root_child0.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      150 === root_child1.getComputedLeft(),
      "150 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_top_and_bottom_strech", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_TOP, "auto");
    root_child0.setMargin(Yoga.EDGE_BOTTOM, "auto");
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0.getComputedTop(),
      "50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      150 === root_child0.getComputedLeft(),
      "150 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0.getComputedTop(),
      "50 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      150 === root_child1.getComputedLeft(),
      "150 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_should_not_be_part_of_max_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(250);
    root.setHeight(250);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_TOP, 20);
    root_child0.setWidth(100);
    root_child0.setHeight(100);
    root_child0.setMaxHeight(100);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(250 === root.getComputedWidth(), "250 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(250 === root.getComputedHeight(), "250 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      20 === root_child0.getComputedTop(),
      "20 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(250 === root.getComputedWidth(), "250 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(250 === root.getComputedHeight(), "250 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      150 === root_child0.getComputedLeft(),
      "150 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      20 === root_child0.getComputedTop(),
      "20 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_should_not_be_part_of_max_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(250);
    root.setHeight(250);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, 20);
    root_child0.setWidth(100);
    root_child0.setMaxWidth(100);
    root_child0.setHeight(100);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(250 === root.getComputedWidth(), "250 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(250 === root.getComputedHeight(), "250 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      20 === root_child0.getComputedLeft(),
      "20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(250 === root.getComputedWidth(), "250 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(250 === root.getComputedHeight(), "250 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      150 === root_child0.getComputedLeft(),
      "150 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left_right_child_bigger_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setWidth(52);
    root.setHeight(52);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root_child0.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child0.setWidth(72);
    root_child0.setHeight(72);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -20 === root_child0.getComputedLeft(),
      "-20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left_child_bigger_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setWidth(52);
    root.setHeight(52);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root_child0.setWidth(72);
    root_child0.setHeight(72);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -20 === root_child0.getComputedLeft(),
      "-20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_fix_left_auto_right_child_bigger_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setWidth(52);
    root.setHeight(52);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, 10);
    root_child0.setMargin(Yoga.EDGE_RIGHT, "auto");
    root_child0.setWidth(72);
    root_child0.setHeight(72);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      10 === root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -20 === root_child0.getComputedLeft(),
      "-20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left_fix_right_child_bigger_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setWidth(52);
    root.setHeight(52);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root_child0.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child0.setWidth(72);
    root_child0.setHeight(72);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -30 === root_child0.getComputedLeft(),
      "-30 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_top_stretching_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexShrink(1);
    root_child0.setFlexBasis("0%");
    root_child0.setMargin(Yoga.EDGE_TOP, "auto");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      0 === root_child0.getComputedWidth(),
      "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      150 === root_child0.getComputedHeight(),
      "150 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      0 === root_child0.getComputedWidth(),
      "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      150 === root_child0.getComputedHeight(),
      "150 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("margin_auto_left_stretching_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexShrink(1);
    root_child0.setFlexBasis("0%");
    root_child0.setMargin(Yoga.EDGE_LEFT, "auto");
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      200 === root_child0.getComputedLeft(),
      "200 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      0 === root_child0.getComputedWidth(),
      "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      150 === root_child0.getComputedHeight(),
      "150 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      200 === root_child0.getComputedLeft(),
      "200 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      0 === root_child0.getComputedWidth(),
      "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      150 === root_child0.getComputedHeight(),
      "150 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      75 === root_child1.getComputedLeft(),
      "75 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      150 === root_child1.getComputedTop(),
      "150 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
