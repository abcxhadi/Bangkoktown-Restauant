missing_images = [
    "tangy_shrimp_salad.jpg",
    "vermicelli_salad.jpg",
    "garlic_fried_rice.jpg",
    "sukiyaki_noodles.jpg",
    "noodles_and_beef.jpg",
    "stuffed_omelet.jpg",
    "thai_sukiyaki_stir_fried.jpg",
    "stir_fried_oyster_sauce.jpg",
    "spicy_tofu.jpg",
    "stir_fried_beansprout.jpg",
    "stir_fried_tofu_with_ginger.jpg",
    "satay_combo.jpg",
    "steam_fish.jpg",
    "crab_grilled.jpg",
    "grilled_squid.jpg",
    "green_salad.jpg",
    "steam_vegetable.jpg",
    "sticky_rice_with_durian.jpg",
    "thai_coconut_ice_cream.jpg",
    "mochi.jpg",
    "thai_iced_black_coffee.jpg",
    "hibiscus_iced_tea.jpg",
    "jackfruit_smoothie.jpg",
    "siam_cooler.jpg",
    "mango_with_mint.jpg",
    "pomegranate_juice.jpg"
]

html_content = """
<html>
<head>
<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
</head>
<body>

<h2>Missing Images</h2>

<table>
  <tr>
    <th>No.</th>
    <th>Image Name Required</th>
    <th>Checkbox</th>
  </tr>
"""

for i, image in enumerate(missing_images):
    html_content += f"""
  <tr>
    <td>{i+1}</td>
    <td>{image}</td>
    <td><input type="checkbox"></td>
  </tr>
"""

html_content += """
</table>

</body>
</html>
"""

with open("missing_images.html", "w") as f:
    f.write(html_content)

print("Generated missing_images.html")
