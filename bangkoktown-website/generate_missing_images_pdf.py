from fpdf import FPDF

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

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)

pdf.cell(200, 10, txt="Missing Images", ln=1, align="C")

pdf.cell(20, 10, txt="No.", border=1)
pdf.cell(150, 10, txt="Image Name Required", border=1)
pdf.cell(20, 10, txt="Checkbox", border=1, ln=1)

for i, image in enumerate(missing_images):
    pdf.cell(20, 10, txt=str(i+1), border=1)
    pdf.cell(150, 10, txt=image, border=1)
    pdf.cell(20, 10, txt="[ ]", border=1, ln=1)

pdf.output("missing_images.pdf")

print("Generated missing_images.pdf")
