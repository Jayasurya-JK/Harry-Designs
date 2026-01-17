"""
Image Optimization Script for Harry Designs Portfolio
Converts PNG/JPG images to WebP format with compression
Deletes original files after conversion
"""

from PIL import Image
import os

# Configuration
IMAGE_DIR = os.path.join("public", "image", "samples")
WEBP_QUALITY = 85  # 0-100, higher is better quality
DELETE_ORIGINALS = True  # Set to False for testing

def convert_to_webp(input_file, quality=85):
    """Convert an image to WebP format"""
    try:
        # Full path to input file
        input_path = os.path.join(IMAGE_DIR, input_file)
        
        # Open the image
        img = Image.open(input_path)
        
        # Convert RGBA to RGB if necessary
        if img.mode == 'RGBA':
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])
            img = background
        elif img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGB')
        
        # Create output path
        output_file = os.path.splitext(input_file)[0] + '.webp'
        output_path = os.path.join(IMAGE_DIR, output_file)
        
        # Save as WebP
        img.save(output_path, 'WEBP', quality=quality, method=6)
        
        # Get file sizes
        original_size = os.path.getsize(input_path)
        webp_size = os.path.getsize(output_path)
        reduction = ((original_size - webp_size) / original_size) * 100
        
        print(f"✅ Converted: {input_file}")
        print(f"   Original: {original_size / 1024 / 1024:.2f} MB")
        print(f"   WebP: {webp_size / 1024 / 1024:.2f} MB")
        print(f"   Reduction: {reduction:.1f}%")
        
        return output_path, original_size, webp_size
        
    except Exception as e:
        print(f"❌ Error converting {input_file}: {e}")
        return None, 0, 0

def update_component():
    """Update ParallaxGallery.jsx to use .webp extensions"""
    component_path = os.path.join("src", "components", "ParallaxGallery.jsx")
    
    if not os.path.exists(component_path):
        print(f"⚠️  Component file not found: {component_path}")
        return
    
    try:
        with open(component_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace .png with .webp
        updated_content = content.replace('.png"', '.webp"')
        
        with open(component_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"\n✅ Updated component: {component_path}")
        
    except Exception as e:
        print(f"❌ Error updating component: {e}")

def main():
    """Main conversion process"""
    print("🎨 Harry Designs - Image Optimization Script")
    print("=" * 60)
    print(f"Directory: {IMAGE_DIR}")
    print(f"Quality: {WEBP_QUALITY}")
    print(f"Delete originals: {DELETE_ORIGINALS}")
    print("=" * 60)
    print()
    
    # Check if directory exists
    if not os.path.exists(IMAGE_DIR):
        print(f"❌ Error: Directory not found: {IMAGE_DIR}")
        return
    
    # Find all PNG and JPG images
    image_files = []
    for file in os.listdir(IMAGE_DIR):
        if file.lower().endswith(('.png', '.jpg', '.jpeg')):
            image_files.append(file)
    
    if not image_files:
        print("❌ No PNG/JPG images found to convert!")
        return
    
    print(f"📁 Found {len(image_files)} images to convert\n")
    
    # Convert each image
    converted_count = 0
    total_original_size = 0
    total_webp_size = 0
    
    for img_file in sorted(image_files):
        result, orig_size, webp_size = convert_to_webp(img_file, quality=WEBP_QUALITY)
        
        if result:
            converted_count += 1
            total_original_size += orig_size
            total_webp_size += webp_size
            
            # Delete original if configured
            if DELETE_ORIGINALS:
                try:
                    orig_path = os.path.join(IMAGE_DIR, img_file)
                    os.remove(orig_path)
                    print(f"   🗑️  Deleted original: {img_file}")
                except Exception as e:
                    print(f"   ⚠️  Could not delete {img_file}: {e}")
        
        print()  # Blank line
    
    # Summary
    print("=" * 60)
    print("📊 CONVERSION SUMMARY")
    print("=" * 60)
    print(f"Images converted: {converted_count}/{len(image_files)}")
    print(f"Total original size: {total_original_size / 1024 / 1024:.2f} MB")
    print(f"Total WebP size: {total_webp_size / 1024 / 1024:.2f} MB")
    
    if total_original_size > 0:
        total_reduction = ((total_original_size - total_webp_size) / total_original_size) * 100
        print(f"Total reduction: {total_reduction:.1f}%")
        print(f"Space saved: {(total_original_size - total_webp_size) / 1024 / 1024:.2f} MB")
    
    print()
    
    # Update component file
    if converted_count > 0:
        print("🔧 Updating component file...")
        update_component()
    
    print()
    print("✅ Image optimization complete!")
    print("🚀 Your website will now load MUCH faster!")

if __name__ == "__main__":
    main()
