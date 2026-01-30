# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A browser-based Spelling Bee practice application for 4th-6th grade students. The app presents 20 words of increasing difficulty, uses text-to-speech to pronounce words, and fetches definitions from an external dictionary API.

## Running the Application

Open `index.html` directly in a web browser. No build step or server required.

## Architecture

**Single-page application with two files:**
- `index.html` - Contains all HTML, CSS, and game logic in a single file
- `words.js` - Word lists with difficulty ratings (1-5 scale), loaded via script tag

**Key data structures in words.js:**
- `SPELLING_WORDS` - Object with `list1` (easier) and `list2` (harder) word arrays
- `WORD_DIFFICULTY` - Map of word to difficulty level (1-5)
- `getAllWords()` / `getWordsByDifficulty()` - Helper functions

**Game flow in index.html:**
- Three screens: start, game, results (toggled via display property)
- `selectGameWords()` picks 4 words from each difficulty level (20 total)
- Uses Web Speech API (`speechSynthesis`) for pronunciation
- Fetches definitions from `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`

**Scoring:**
- Base points = difficulty * 10
- Streak bonus = streak count * 5
