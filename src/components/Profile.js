// Profile.js
import './Profile.css';
import { useState, useRef, useEffect } from "react";
import Colorwheel from "./Colorwheel";
import { Palette } from "lucide-react";

function Profile() {
  const [username] = useState(() => localStorage.getItem("username") || "Guest");
  const [accentText, setAccentText] = useState(() => localStorage.getItem("accentTextColor") || "hsl(200, 100%, 50%)");
  const [accentBanner, setAccentBanner] = useState(() => localStorage.getItem("accentBannerColor") || "hsl(200, 50%, 80%)");
  const [avatar, setAvatar] = useState(() => localStorage.getItem("avatar") || "/default-avatar.png");

  const [showTextPicker, setShowTextPicker] = useState(false);
  const [showBannerPicker, setShowBannerPicker] = useState(false);
  const [showAvatarEditor, setShowAvatarEditor] = useState(false);

  const textPickerRef = useRef(null);
  const bannerPickerRef = useRef(null);
  const fileInputRef = useRef(null);
  const avatarEditorRef = useRef(null);

  const [editorImg, setEditorImg] = useState(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState(null);
  const [scale, setScale] = useState(1);

  // Save accent colors
  useEffect(() => localStorage.setItem("accentTextColor", accentText), [accentText]);
  useEffect(() => localStorage.setItem("accentBannerColor", accentBanner), [accentBanner]);

  // Save avatar to localStorage AND dispatch event for other components
  useEffect(() => {
    localStorage.setItem("avatar", avatar);
    window.dispatchEvent(new Event("avatarChanged")); // notify listeners
  }, [avatar]);

  // Close pickers/editor on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (textPickerRef.current && !textPickerRef.current.contains(e.target)) setShowTextPicker(false);
      if (bannerPickerRef.current && !bannerPickerRef.current.contains(e.target)) setShowBannerPicker(false);
      if (avatarEditorRef.current && !avatarEditorRef.current.contains(e.target)) setShowAvatarEditor(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAvatarClick = () => fileInputRef.current.click();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditorImg(reader.result);
        setDragPos({ x: 0, y: 0 });
        setScale(1);
        setShowAvatarEditor(true);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = null;
  };

  // Drag & zoom logic
  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragStart({ x: e.clientX - dragPos.x, y: e.clientY - dragPos.y });
  };
  const handleMouseMove = (e) => {
    if (!dragStart) return;
    setDragPos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };
  const handleMouseUp = () => setDragStart(null);
  const handleWheel = (e) => setScale(prev => Math.max(0.5, Math.min(3, prev + e.deltaY * -0.001)));

  // Save edited avatar
  const handleSaveAvatar = () => {
    const size = 300;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const img = new Image();
    img.src = editorImg;
    img.onload = () => {
      ctx.drawImage(
        img,
        size / 2 - (img.width * scale) / 2 + dragPos.x,
        size / 2 - (img.height * scale) / 2 + dragPos.y,
        img.width * scale,
        img.height * scale
      );
      setAvatar(canvas.toDataURL()); // updates localStorage and triggers avatarChanged event
      setShowAvatarEditor(false);
    };
  };

  return (
    <div className="profile-page">
      <div className="user-flair" style={{ backgroundColor: accentBanner }}>
        <div className="image-container" style={{ borderColor: accentText }} onClick={handleAvatarClick}>
          <img src={avatar} alt="User avatar" className="user-avatar" />
          <input type="file" accept="image/*" ref={fileInputRef} style={{ display: "none" }} onChange={handleAvatarChange} />
        </div>

        <div className="user-banner">
          <div className="username-block">
            <h1 className="username-text" style={{ color: accentText }}>{username}</h1>
            <span className="username-id-text">@{username}</span>
          </div>

          <div className="color-picker-wrapper" ref={textPickerRef}>
            <button className="color-btn" onClick={() => setShowTextPicker(!showTextPicker)}><Palette size={24} /></button>
            {showTextPicker && <div className="colorwheel-popup"><Colorwheel onChange={c => setAccentText(`hsl(${c.h},${c.s}%,${c.l}%)`)} /></div>}
          </div>

          <div className="color-picker-wrapper" ref={bannerPickerRef}>
            <button className="color-btn" onClick={() => setShowBannerPicker(!showBannerPicker)}><Palette size={24} /></button>
            {showBannerPicker && <div className="colorwheel-popup"><Colorwheel onChange={c => setAccentBanner(`hsl(${c.h},${c.s}%,${c.l}%)`)} /></div>}
          </div>
        </div>
      </div>

      <h1 className="example-text" style={{ color: accentText }}>Text color example</h1>
      <div className="rules-box"></div>

      {showAvatarEditor && (
        <div className="avatar-editor-overlay" onWheel={handleWheel}>
          <div className="avatar-editor-popup"
            ref={avatarEditorRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}>
            <div className="avatar-editor-circle">
              <img
                src={editorImg}
                alt="Editing avatar"
                style={{
                  transform: `translate(calc(-50% + ${dragPos.x}px), calc(-50% + ${dragPos.y}px)) scale(${scale})`,
                  cursor: dragStart ? "grabbing" : "grab"
                }}
                onMouseDown={handleMouseDown}
                draggable={false}
              />
            </div>
            <div className="avatar-editor-controls">
              <button onClick={handleSaveAvatar}>Save</button>
              <button onClick={() => setShowAvatarEditor(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
