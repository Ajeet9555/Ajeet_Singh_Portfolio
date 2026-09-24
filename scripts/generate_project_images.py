import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/assets/projects', exist_ok=True)

projects = [
    ('ai_career_intelligence.png', 'AI Career Intelligence', 'Resume Analysis • Skill Extraction • RAG Learning • Mock Interviews', '#3b82f6', '#1d4ed8'),
    ('ai_interview_bot.png', 'AI Interview Bot', 'Dynamic Question Generation • Voice & Text Simulation • Automated Evaluation', '#8b5cf6', '#6d28d9'),
    ('modelpulse_ai.png', 'ModelPulse AI', 'ML Lifecycle • Experiment Tracking • Model Registry & Drift Monitoring', '#10b981', '#047857'),
    ('agentic_research_agent.png', 'Agentic Research Agent', 'Autonomous Multi-Step Planning • Tool Execution & Recovery', '#ec4899', '#be185d')
]

for filename, title, subtitle, accent_color, accent_dark in projects:
    img = Image.new('RGB', (1200, 675), color='#0a0d14')
    draw = ImageDraw.Draw(img)
    
    # Outer Glow Card
    draw.rounded_rectangle([20, 20, 1180, 655], radius=24, fill='#131929', outline='#1e293b', width=2)
    
    # Browser Header bar
    draw.rounded_rectangle([20, 20, 1180, 80], radius=24, fill='#182035')
    draw.rectangle([20, 60, 1180, 80], fill='#182035')
    
    # Dots
    draw.ellipse([50, 44, 64, 58], fill='#ef4444')
    draw.ellipse([74, 44, 88, 58], fill='#f59e0b')
    draw.ellipse([98, 44, 112, 58], fill='#10b981')
    
    # URL Pill
    draw.rounded_rectangle([150, 36, 1050, 66], radius=15, fill='#0a0d14')
    draw.text((170, 43), f"https://github.com/Ajeet9555/{title.replace(' ', '-')}", fill='#64748b')
    
    # Grid Layout inside App Preview
    # Left Sidebar Navigation
    draw.rounded_rectangle([50, 100, 260, 625], radius=16, fill='#0f1422', outline='#1e293b', width=1)
    # App Logo box
    draw.rounded_rectangle([70, 120, 240, 170], radius=12, fill=accent_color)
    draw.text((90, 137), title[:3].upper(), fill='#ffffff')
    
    # Nav items
    for i in range(5):
        y = 200 + i * 50
        fill = accent_color if i == 0 else '#1e293b'
        draw.rounded_rectangle([70, y, 240, y + 36], radius=8, fill=fill)
        
    # Main Content Area
    draw.rounded_rectangle([280, 100, 1150, 240], radius=16, fill='#182035', outline=accent_color, width=1)
    draw.text((310, 130), title, fill='#ffffff')
    draw.text((310, 175), subtitle, fill='#94a3b8')
    
    # Right Badge
    draw.rounded_rectangle([960, 130, 1120, 170], radius=20, fill=accent_dark)
    draw.text((980, 143), "FEATURED", fill='#ffffff')
    
    # Analytics / Widgets Cards
    draw.rounded_rectangle([280, 260, 690, 430], radius=16, fill='#0f1422', outline='#1e293b', width=1)
    draw.rounded_rectangle([300, 280, 500, 310], radius=8, fill=accent_color)
    draw.rounded_rectangle([300, 330, 670, 410], radius=8, fill='#182035')
    
    draw.rounded_rectangle([710, 260, 1150, 430], radius=16, fill='#0f1422', outline='#1e293b', width=1)
    draw.rounded_rectangle([730, 280, 930, 310], radius=8, fill='#8b5cf6')
    draw.rounded_rectangle([730, 330, 1130, 410], radius=8, fill='#182035')
    
    # Bottom Wide Panel
    draw.rounded_rectangle([280, 450, 1150, 625], radius=16, fill='#182035', outline='#1e293b', width=1)
    
    save_path = os.path.join('public/assets/projects', filename)
    img.save(save_path)

print("Generated all 4 project images successfully!")
